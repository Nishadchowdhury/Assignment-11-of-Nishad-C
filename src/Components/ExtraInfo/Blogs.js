import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div className='flex justify-center my-3' >
                <Link
                    to='/'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 border-2 
                    border-blue-600 bg-blue-300 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out hover:text-white"
                >
                    <p className='flex items-center gap-2' ><span>Home</span> <img className='w-7 inline-block' src="https://i.ibb.co/k1m5pJK/Pngegg.png" alt="" /> </p>
                </Link>
            </div>
            <div className='flex justify-center ' >

                <div className="accordion w-2/3" id="accordionExample5">
                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingOne5">
                            <button className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
                                aria-controls="collapseOne5">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
                            <div className="accordion-body py-4 px-5">
                                <strong>This is the first item's accordion body.</strong> It is shown by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element. These classes control the overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingTwo5">
                            <button className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
                                aria-controls="collapseTwo5">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5">
                            <div className="accordion-body py-4 px-5">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element. These classes control the overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingThree5">
                            <button className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
                                aria-controls="collapseThree5">
                                Differences between sql and nosql
                            </button>
                        </h2>
                        <div id="collapseThree5" className="accordion-collapse collapse flex lg:flex-row flex-col " aria-labelledby="headingThree5">
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">
                                <strong>SQL</strong> <br />
                                <span className='text-lg font-semibold' >S</span> for <span>Structured</span> <span className='text-lg font-semibold' >Q</span> for <span>Query</span> <span className='text-lg font-semibold' >L</span> for <span>Language</span>, <br />
                                this Language used for getting data from the data base by query and
                                any other operations as possible with database like CRUD , <br />

                                but we can do it by some text and that texts is call query language . <br />

                                in sql database , data will stored in a structure of table .
                                multiple table can be connected by id , there is meany table connected together that's why it's call relational database . <br />
                                SQl database based on rows and  columns , first row of db is about key of database and rest of row contains values .


                            </div>
                            <div className='flex items-center justify-center text-blue-500 font-bold' >vs</div>
                            <div className="accordion-body py-2 border-[1px] rounded-xl  px-3 m-2">
                                <strong>noSQL</strong> <br />
                                noSQl means there is no SQL Structured query language . <br />
                                for example , we stored data as table Structured in SQl , <br />
                                but we stored data in noSQL as an object . <br />
                                but we can do Read ,write , update and etc , but some different way . <br />
                                 like a json file or js object .
                                it's work on key value pair , means data stored as value of the data's name call key . we can stored user's post and comments in a array of objects . <br />

                                at last we can store all objects of data in an array . <br />

                                main thinking of noSQL is , store each and every data of user in a single place .    





                            </div>
                        </div>
                    </div>


                    <div className="accordion-item bg-white border border-gray-200">
                        <h2 className="accordion-header mb-0" id="headingThree4">
                            <button className="
              accordion-button
              collapsed
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false"
                                aria-controls="collapseThree4">
                                Accordion Item #4
                            </button>
                        </h2>
                        <div id="collapseThree4" className="accordion-collapse collapse" aria-labelledby="headingThree4">
                            <div className="accordion-body py-4 px-5">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element. These classes control the overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                our default variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;