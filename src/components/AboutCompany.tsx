import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCompany, setCompanyDetails,} from "../store/slices/aboutCompanySlice";
import {IViewers, viewersArray} from "./mock";
import cssStyles from "../styles/styles";

const AboutCompany = () => {
    const {id} = useParams();
    const comp = useSelector(selectCompany);
    const [company, setCompany] = useState<IViewers | null>(null);
    const dispatch = useDispatch();
    const {aboutCompany} = cssStyles;

    useEffect(() => {
        dispatch(setCompanyDetails(viewersArray))
    }, []);

    useEffect(() => {
        if (id && comp) {
            const foundCompany = comp.find((movie) => movie.id === id) || null
            setCompany(foundCompany)
        }
    }, [id, comp]);

    return (
        <>
            { company ? (
                    <aboutCompany.CompanyContainer>
                        <aboutCompany.BackgroundImageContainer>
                            <aboutCompany.BackgroundImage
                                src={company.bgCompanyImg}
                                alt={company.companyTitle}/>
                            <aboutCompany.BackgroundImageTextWrap>
                                <h1>{company.companyTitle}</h1>
                            </aboutCompany.BackgroundImageTextWrap>
                        </aboutCompany.BackgroundImageContainer>
                        <aboutCompany.CompanyDescription>
                            {company.companyDescription}
                        </aboutCompany.CompanyDescription>
                    </aboutCompany.CompanyContainer>
                ) : (
                    <aboutCompany.NotFoundCompany>
                        Company is not found
                    </aboutCompany.NotFoundCompany>)
            }
        </>
    );
}

export default AboutCompany;