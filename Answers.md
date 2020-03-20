# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

At its core, React is a solution to a problem that developers faced when building user interfaces. It allows developers to build complex user interfaces which have components that will change frequently over time, without having to write a lot of very tricky JavaScript code.

1. What does it mean to think in react?

Step 1:Break The UI Into A Component Hierarchy, Step 2: Build A Static Version in React, Step 3: Identify The Minimal (but complete) Representation Of UI State, Step 4: Identify Where Your State Should Live, Step 5: Add Inverse Data Flow.

1. Describe state.

State is managed within the component. Variables can be declared in the function body. State can be changed. State is a object that determines how that component renders and behaves.

1. Describe props.

Props get passed to the component, they're function parameters, props are immutable, props are used to make functional components, this.props is used in class components.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are basically anything that affects something outside of the scope of the current function that's being executed. By using useEffect, whenever props change we will set the state inside useEffect. This way whenever props gets changed, it will set as the state inside useEffect. 
