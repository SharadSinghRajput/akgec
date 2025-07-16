import"@/styles/globals.css";

export const metadata = {
  title: "Hostel | AKGU",
  description: "Hostel",
};

export default function RootLayout({ children }) {
  return (
    <div >
      {children}
    </div>
  );
}
