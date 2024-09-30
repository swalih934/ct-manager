import React, { useEffect, useState } from 'react'
import { getCategories,deleteCategory,updatecategory } from '../Services/AllApis'
import Contactcard from './Contactcard'
import { toast } from 'react-toastify'

function CatogeryList({response}) {

  const [categoryList, setCategoryList] = useState({})
  useEffect(() => {
    getData()
  }, [response])

  const getData = async () => {
    const result = await getCategories()
    console.log(result);
    if (result.status == 200) {
      setCategoryList(result.data)
    }

  }


  const deleteCat=async(id)=>{
    const result=await deleteCategory(id)
    console.log(result);
    if(result.status==200){
      getData()
    }
  }
  const dropHandler=async(e,category)=>{
    console.log("dropped");
    const vid=JSON.parse(e.dataTransfer.getData("contact"));
    category.contacts.push(vid)
    const result=await updatecategory(category.id,category)
    console.log(result);
    if(result.status==200){
      toast.success(`${vid.name} contact added to ${category.title}`)
      getData()
    }
    else{
      toast.error("contact category adding failed")
    }
    
  }
  const dragOverHandler=(e)=>{
    console.log("dragging over");
    e.preventDefault()
    
  }
  return (
    <>
      <div className='container-fluid border border-3 border-light p-2 mt-3'>

        {
          categoryList.length > 0 ?
            <div >

              {
                categoryList.map(item => (
                 <div className='border m-1 border-dark'>
                    <div className='m-2 p-3 mb-3  d-flex justify-content-between'onDragOver={(e)=>{dragOverHandler(e)}} onDrop={(e)=>{dropHandler(e,item)}}>
                      <h3>{item.title}</h3>
                      <button className='btn ' onClick={()=>{deleteCat(item.id)}}>
                        <i className="fa-solid fa-trash" style={{ color: "#c60606", }} />
  
                      </button>
                    </div>
                    <div className='border border-dark'>
{
  item?.contacts?.length>0 &&
  <>
  {item?.contacts?.map(vid=>(
    <Contactcard contact={vid} cat={true}/>
  ))}
  </>
}
                    </div>
                 </div>


                ))
              }

            </div>
            :
            <h5 className='fw-bold text-center'>No Categories!!</h5>
        }



      </div>


    </>

  )
}

export default CatogeryList