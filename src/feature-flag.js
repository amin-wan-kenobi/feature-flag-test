import A from './components/A';
import B from './components/B';
import C from './components/C';

export default featureFlag = {
    components: [
        {
            A: {
                render: false,
                children: [B],
                props:[]
            }
        },
        {
            B: {
                render: true,
                children: [C],
                props:[]
            }
        },
        {
            C: {
                render: false,
                children:[],
                props:[]
            }
        }
    ]
}