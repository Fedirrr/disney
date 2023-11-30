import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCompany, setSCompanyDetails} from "../store/slices/aboutCompanySlice";
import {IViewers} from "./mock";

const AboutCompany = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const comp = useSelector(selectCompany)
    const [company, setCompany] = useState<IViewers | null>(null)

    useEffect(() => {
        if (id && comp) {
            const foundCompany = comp.find((movie) => movie.id === id) || null
            setCompany(foundCompany)
        }
    }, [id, comp]);
    return (
        <div>

            {
                company ? (<div style={{padding: "100px"}}>{company?.id}</div>) : <div>Company is not found</div>
            }
        </div>

    );
}

export default AboutCompany;