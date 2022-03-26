import React from 'react';

const Answer = () => {
    return (
        <div>
            <div className=' m-5'>
                <h1 className='fs-1 m-5 text-center text-info'>Moat Asked Question</h1>
                <h1 className='fs-1'>1. How react js works?</h1>
                <p>Virtual dom is used by React. JavaScript has the ability to alter the dom. However, respond creates two distinct types of doms. There are two types of domains: actual and virtual. React merely keeps track of a tree. On the real dom and virtual dom, this tree can do efficient diff calculations. React allows you to essentially re-construct the DOM in JavaScript and only push the changes that have really happened to the DOM. JSX is also used by React to make its work easier. Nothing compares to JSX, neither in terms of JavaScript nor in terms of the browser. JSX is a syntactic sugar that allows you to create extremely customized JavaScript objects.</p>
            </div>
            <div className=' m-5' >
                <h1 className='fs-1'>2. Different between 'props' and 'states'?</h1>
                <p>Props for sending data to inside its components and state for storing dynamic data. State is changeable, but props are immutable. Props let you to transmit data as an argument from one component to another. Props let you to transmit data as an argument from one component to another. Props are employed to communicate amongst the various parts of the set. States can be used to render the component's dynamic changes. Props allow components to be reused. Props are external and are managed by the component's renderer. The State is internal to the React Component and is managed by it.</p>
            </div>
            <div className=' m-5' >
                <h1 className='fs-1'>3. How 'useState' works?</h1>
                <p>React provides certain specific hooks in functional components to quickly manipulate react pages. Hooks provide access to state and other React capabilities for function components. Within React function components, hooks may only be referred to as top level. Any form of state can be used.</p>
            </div>
        </div>
    );
};

export default Answer;