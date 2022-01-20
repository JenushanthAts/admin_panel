import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import { useState } from "react";
export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) =>{
         setData(data.filter(item=>item.id !==id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'user', headerName: 'Users', width: 160, renderCell: (params) => {
                return (
                    <div className="userListUser">

                        <img className="userListImg"
                            src={params.row.avatar} alr="user image" />
                        {params.row.username}
                    </div>
                )
            }
        },

        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'status', width: 90, },

        { field: 'transaction', headerName: 'Transaction', width: 160 },

        {
            field: 'action', headerName: 'Action', width: 150,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to={"/user/" +params.row.id}>
                    <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    ];

    
    // console.log(rows[0].username);
    return (

        <div  className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={6}
                // rowsPerPageOptions={[8]}
                checkboxSelection
            />
        </div>
    )
}
