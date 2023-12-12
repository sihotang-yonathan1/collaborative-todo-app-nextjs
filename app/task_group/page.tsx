//export default function TaskGroupPage(){
//    return (
//        <div className="flex flex-col bg-orange-300 w-full h-screen justify-center">
//            <div className="flex flex-col justify-center items-center self-center border p-2 m-2 bg-slate-200">
//                <div>
//                    <p className="font-semibold">Proyek</p>
 //               </div>
 //               <div className="border">
   //                 <p>Tugas 1</p>
  //              </div>
   //         </div>
 //       </div>
 //   )
//}
//"use client";
//import fakeData from "./MOCK_DATA.json";
//import * as React from 'react';
//import { useTable } from "react-table"; 

//export default function TaskGroupPage() {
 //   const data = React.useMemo(() => fakeData, []);
//    const columns = React.useMemo(
//    () => [
//      {
//        Header: "ID",
//        accessor: "id",
//      },
//      {
//        Header: "First Name",
//        accessor: "first_name",
//      },
//      {
//        Header: "Last Name",
 //       accessor: "last_name",
//      },
//      {
 //       Header: "Email",
  //      accessor: "email",
//      },
//      {
//        Header: "Gender",
//        accessor: "gender",
//      },
//      {
//        Header: "University",
//        accessor: "university",
//      },
//    ],
//    []
 // );
//
//  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = useTable({columns, data});
//
//    return (
//        <div>
//            <header className="bg-blue-400 text-center p-2 text-2xl "> <b>This is the Header</b> </header>
//            <h1 className="text-left p-2 font-bold text-xl ">Projects</h1>
//            <div className="App">
//                <div className="container">
//                    <table {...getTableProps()}>
//                        <thead>
//                            {headerGroups.map((headerGroup) => (
//                                <tr {...headerGroup.getHeaderGroupProps()}>
//                                    {headerGroup.headers.map((column) => (
 //                                       <th {...column.getHeaderProps}>
  //                                          {column.render("Header")}
//                                        </th>
 //                                   ))}
 //                               </tr>
 //                           ))}
 //                       </thead>
  //                      <tbody {...getTableBodyProps()}>
  //                          {rows.map((row) => {
  //                              prepareRow(row)
  //                              return (
  //                                  <tr {...row.getRowProps()}>
  //                                      {row.cells.map((cell) => (
   //                                         <td {...cell.getCellProps}> {cell.render("Cell")} </td>
   //                                     ))}
//
//                                    </tr>
//                                )
 //                           })}
//
//
//                        </tbody>
//                    </table>
//                </div>
//            </div>
//            
//            
//
//        </div>
//        
//        
//    )
//}

import ProjectList from "./ProjectList";
import ProjectSection from "./ProjectSection";
<script src="script.js" defer></script>
export default function TaskGroupPage(){
    return (
        <div> 
            <div className="flex flex-col w-full h-screen">
            <ProjectSection title="Projects"/>
        </div>
      
        </div>
        
    )
}

