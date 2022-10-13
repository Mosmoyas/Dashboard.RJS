import "../Content/Content.css"
import Head from "../Head/Head"
import { DashWrapper } from "../../pages/Dashboard/index"
import { PageHead } from "../../Components/index"


const Content = () => {
    return (
        <>
            <div class="content w-full .overflow-h">
                <Head />
                <PageHead>Dashboard</PageHead>
                <DashWrapper />
            </div>
        </>
    )
}

export default Content