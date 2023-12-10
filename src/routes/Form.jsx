import MainForm from "../components/MainForm/MainForm";
import MainFormNav from "../components/MainForm/MainFormNav/MainFormNav";

function FormLayout() {
    return (
        <div className="flex flex-col justify-center h-full items-center relative">
            <div>
                <div>
                    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                        <MainForm />
                    </div>
                </div>
            </div>
            <MainFormNav />
        </div>
    );
}

export default FormLayout;
