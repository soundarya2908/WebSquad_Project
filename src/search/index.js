import React, { useEffect, useState } from 'react';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {findDonorsByCitynameThunk} from "./search-thunk";

const Search =() => {
    const {donors, loading} = useSelector((state) => state.donors);
    const [cityname, setCityname] = useState(donors);
    const dispatch = useDispatch()
    const handlesearchbycity = () => {
        
            dispatch(findDonorsByCitynameThunk(cityname))
           console.log(cityname)
    }
   
return(
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <nav class="navbar navbar-default">
        <div class="nav nav-justified navbar-nav">
 
            <form class="navbar-form navbar-search" role="search">
                <div class="input-group">
        
                    <input type="text" class="form-control" name="city" id="city" 
                             
                              onChange={(event) => setCityname(event.target.value)}
                               title="enter your phone number if any."/>
                
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-search btn-info" onClick={handlesearchbycity}>
                            <span class="glyphicon glyphicon-search"></span>
                            <span class="label-icon">Search</span>
                        </button>
                    </div>
                </div>  
            </form>   
         
        </div>
    </nav>
                            
            </div>
        </div>
    </div>
)
}

export default Search;