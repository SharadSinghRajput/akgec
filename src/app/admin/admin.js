import SideBar from "./sidebar"; // Ensure the path is correct
import PageCreator from './AddPage'; // Ensure the path is correct
export default function Admin() {
    return (
        <>
            <div className="flex">
                <SideBar />
                <PageCreator />
                {/* <PageDetailsForm /> */}
            </div>
        </>
    );
}
