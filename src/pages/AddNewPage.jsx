import React from 'react'
import FormGroupInput from '../components/FormGroupInput'
import FormGroupSelect from '../components/FormGroupSelect'
import FormGroupTextarea from '../components/FormGroupTextarea'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

function AddNewPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
    <div className="text-start p-3 bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <h3 className="text-start mb-4 mt-4 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">Create New Blog Post</h3>
        <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">

                    <FormGroupInput label="Title" placeholder="Type post title" type="text"  />

                    <FormGroupSelect label="Category" options={[{label:"Sports",value:1},{label:"Politics",value:2}]} />

                    <FormGroupTextarea label="Description" placeholder="Write description here.." />

                </div>
                 <Button label="Submit" color="green" />
                 <Link to="/" class="ml-2 text-gray-800 bg-gray-100 hover:bg-gray-200 dark:text-white  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Cancel</Link>
            </form>
    </div>
    </div>
   </section>
  )
}

export default AddNewPage