import { msATS, msTSP, vcgAI, vcgStrategy} from "./dataWork";

const workTabs = [
    {
        label: 'Data Science',
        details: [
            {
                org: 'Volvo Cars',
                roles: [vcgAI]
            }
        ],
        id: 1
    },
    {
        label: 'Product Management',
        details: [
            {
                org: 'Volvo Cars',
                roles: [vcgStrategy]
            }
        ],
        id: 2
    },
    {
        label: 'Sales Engineering',
        id: 3,
        details: [
            {
                org: "Microsoft",
                roles: [msTSP, msATS]
            }
        ]
    }
]

export default workTabs;