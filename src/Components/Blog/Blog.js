import React from 'react';

const Blog = () => {
    return (
        <div className='pt-20 mx-auto '>
            <h1 className='text-6xl font-bold text-blue-400 py-20 my-15'>There have Some Broad Question</h1>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-4xl font-bold">
                    <span className='text-yellow-700'>Question (01):</span>: What is the purpose of react router ??
                </div>
                <div className="collapse-content bg-blue-200 p-10 m-5 w-90 text-green-800 text-3xl">
                    <h1><span className='text-yellow-700'>Answer (01):</span>:</h1>
                    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
                </div>


            </div>

            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-4xl font-bold">
                    <span className='text-yellow-700'>Question (02):</span> : How does context api work
                </div>
                <div className="collapse-content bg-blue-400 p-10 m-5 w-90 text-white text-3xl">
                    <h1><span className='text-yellow-700'>Answer (02):</span>:</h1>
                    <p><span >Answer :</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-4xl font-bold">
                    <span className='text-yellow-700'>Question (03):</span> How does the Useref hook works??
                </div>
                <div className="collapse-content bg-blue-500 p-10 m-5 w-90 text-white text-3xl">
                    <h1><span className='text-yellow-500'>Answer (03):</span>:</h1>
                    <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
                </div>


            </div>
        </div>
    );
};

export default Blog;