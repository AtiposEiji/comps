import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: "1",
            label: "Can I use React on a project?",
            content: "You can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any project"
        },{
            id: "2",
            label: "Can I use Vue on a project?",
            content: "You can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any project"
        },{
            id: "3",
            label: "Can I use Angular on a project?",
            content: "You can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any projectYou can use a React on any project"
        }
    ]

    return <Accordion items={items} />
}

export default AccordionPage;