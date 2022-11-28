import React from 'react';

const Blog = () => {
    return (
        <div className='services'>
            <div className='container p-2 mx-auto'>

                <h1 className='bebus text-4xl my-5'>
                    What are the different ways to manage a state in a React application?
                </h1>
                <p className="my-2">
                    Keeping such data in the URL allows users to share deep links with ot.
                    The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
                    The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc..
                </p>
                <hr />
                <h1 className='bebus text-4xl'>
                    How does prototypical inheritance work?
                </h1>
                <p className="my-2">In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. The inheritance of Prototype is  a method by which an object can inherit the properties and methods of another object.prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.

                </p>
                <hr />
                <h1 className='bebus text-4xl my-5'>
                    What is a unit test? Why should we write unit tests?
                </h1>
                <p className="my-2">
                    A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
                    The key is: when you write test you take the perspective of the one that will consume your code. It forces you to have an holistic approach of the behavior to implement. This way ambiguities you get from requirements become obvious and are immediately taken account when code is written the first time.</p>
                <hr />
                <h1 className='bebus text-4xl my-5'>
                    React vs. Angular vs. Vue?
                </h1>
                <p className="my-2">There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                    React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.Each framework is component-based and allows the rapid creation of UI features.

                </p>
                <hr />

            </div>
        </div>)
};

export default Blog;