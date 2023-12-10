import { useAdminStore } from "../../../store/adminStore";

function MainFormNav() {
    const activeFormNavSection = useAdminStore(
        (state) => state.activeFormNavSection
    );
    const setActiveFormNavSection = useAdminStore(
        (state) => state.setActiveFormNavSection
    );

    const menuItems = ["General", "Finances", "Warranties", "pokemans"];

    return (
        <aside className="absolute hidden w-64 inset-y-0 left-0 overflow-y-auto border border-slate-200 px-4 py-6 sm:px-6 lg:px-8 lg:block">
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {menuItems.map((menuItem, index) => {
                                return (
                                    <li key={menuItem}>
                                        <button
                                            className={`text-indigo-600 group flex w-full gap-x-3 rounded-md p-2 text-sm leading-6 hover:bg-slate-100 ${
                                                index === activeFormNavSection
                                                    ? "font-semibold bg-slate-100"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                setActiveFormNavSection(index)
                                            }
                                        >
                                            {menuItem}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default MainFormNav;
