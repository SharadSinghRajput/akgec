"use client";
import { useRouter } from 'next/router';
import { useState, useEffect, Suspense } from 'react';
import Layout from './index';

export default function DynamicPage() {
  const [PageComponent, setPageComponent] = useState(null); // Capitalize the component name
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {
    const routes = [
      { url: "/about", componentName: "Overview" },
      { url: "/contact", componentName: "BlogDetails" },
      { url: "/services", componentName: "Services" }
    ];

    const fetchPageComponent = async () => {
      try {
        const routeMatch = routes.find(route => route.url === asPath);
console.log(routeMatch)
        if (routeMatch) {
          if(routeMatch.componentName){
            console.log(routeMatch.componentName)

            const PageModule = await import(`./${routeMatch.componentName}`);
            console.log(PageModule);
            const component = PageModule.default;
            setPageComponent(() => component);
          }
        } else {
          setPageComponent(null); // No match found
        }
      } catch (error) {
        console.error('Error loading component:', error);
        setPageComponent(null); // Handle errors
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchPageComponent();
  }, [asPath]);
if(PageComponent !== null){
  return (
    <Layout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        PageComponent ? (
          <Suspense fallback={<p>Loading component...</p>}>
            <PageComponent />
          </Suspense>
        ) : (
          <p>Page not found.</p>
        )
      )}
    </Layout>
  );

}
};
