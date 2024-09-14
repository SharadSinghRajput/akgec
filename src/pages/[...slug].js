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
      { url: "/about/overview", componentName: "Overview" },
      { url: "/about/leadership", componentName: "Directors" },
      { url: "/management", componentName: "Management" },
      { url: "/about/vision-and-mission", componentName: "VisionMission" },
      { url: "/hostel", componentName: "Hostel" },
      { url: "/about/approvals-statutory-bodies", componentName: "ApprovalsStatutoryBodies" },
      { url: "/about/important-functionaries", componentName: "ImportantFunctionaries" },
      { url: "/about/approval-letter", componentName: "ApprovalLetter" },
      { url: "/about/nba-accreditation", componentName: "NbaAccreditation" },
      { url: "/programs", componentName: "ProgramCourse" },
      { url: "/programs/btech", componentName: "BtechProgram" },
      { url: "/academics/academic-calendar-odd", componentName: "AcademicCalendarOdd" },
      { url: "/academics/academic-calendar-even", componentName: "AcademicCalendarEven" },
      { url: "/admissions", componentName: "Admissions" },
    ];

    const fetchPageComponent = async () => {
      try {
        const routeMatch = routes.find(route => route.url === asPath);
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
