import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCompany, setSCompanyDetails,} from "../store/slices/aboutCompanySlice";
import {IViewers, viewersArray} from "./mock";
import cssStyles from "../styles/styles";

const AboutCompany = () => {
    const {id} = useParams();
    const comp = useSelector(selectCompany)
    const [company, setCompany] = useState<IViewers | null>(null)
    const dispatch = useDispatch()
    const {aboutCompany} = cssStyles
    useEffect(() => {
        dispatch(setSCompanyDetails(viewersArray))

    }, []);

    useEffect(() => {
        if (id && comp) {
            const foundCompany = comp.find((movie) => movie.id === id) || null
            setCompany(foundCompany)
        }
    }, [id, comp]);
    return (
        <div>

            {
                company ? (
                        <aboutCompany.CompanyContainer>
                            <aboutCompany.BackgroundImageContainer>
                                <aboutCompany.BackgroundImage
                                    src={company.bgCompanyImg}
                                    alt=""/>
                                <aboutCompany.BackgroundImageTextWrap
                                >
                                    <h1>{company.companyTitle}</h1>
                                </aboutCompany.BackgroundImageTextWrap>
                            </aboutCompany.BackgroundImageContainer>


                            <div className="block2_text_block" style={{
                                padding: "50px"
                            }}>
                                {company.companyDescription}
                            </div>
                        </aboutCompany.CompanyContainer>
                    ) :
                    <div
                        style={{padding: "100px"}}>
                        Company is not found
                    </div>
            }
        </div>

    );
}

export default AboutCompany;