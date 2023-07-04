import React from 'react'
import TableDataRow from '../components/TableDataRow'
import TableTopNav from '../components/TableTopNav'
import TableBottomNav from '../components/TableBottomNav'

function HomePage() {
    
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div className="mx-auto max-w-screen-xl px-4 lg:px-12">

        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            
            <TableTopNav />

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Product name</th>
                            <th scope="col" className="px-4 py-3">Category</th>
                            <th scope="col" className="px-4 py-3">Brand</th>
                            <th scope="col" className="px-4 py-3">Description</th>
                            <th scope="col" className="px-4 py-3">Price</th>
                            <th scope="col" className="px-4 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <TableDataRow />
                        <TableDataRow />
                        <TableDataRow />
                        <TableDataRow />
                        <TableDataRow />
                        <TableDataRow />
                        <TableDataRow />
                        <TableDataRow />


                    </tbody>
                </table>
            </div>

            <TableBottomNav />
           

        </div>
    </div>
    </section>
  )
}

export default HomePage