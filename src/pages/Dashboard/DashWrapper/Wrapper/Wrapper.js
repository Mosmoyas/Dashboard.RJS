import './Wrapper.css'
import QuickDraft from './Widgets/Widgets'
import { Welcome } from './Widgets/Widgets'
import { YearlyStats } from './Widgets/Widgets'

const Wrapper = (props) => {
    return (
        <>
            {/* //{props.children} */}
            <div className="wrapper d-grid gap-20 ml-20 mr-20 mb-25">
                <Welcome />
                <QuickDraft />
                <YearlyStats />

            </div>
        </>)
}

export default Wrapper