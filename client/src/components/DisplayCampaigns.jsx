import React from "react";
import {useNavigate} from 'react-router-dom';

import FundCard from './FundCard'
import { loader } from '../assets';
import { FunctionDeprecatedError } from "@thirdweb-dev/sdk";

const DisplayCampaigns = ({title, isLoading, Campaigns}) => {
    const navigate = useNavigate();

const handleNavigate = (campaign) => {
    navigate('/campaign-details/${campaign.title}',{state:campaign})
}

    return (
        <div>
            <h1 className= "font-epilogue font-semibold text-[18px] text-white text-left">{title} ({Campaigns.length})</h1>

            <div className="flex flex-wrap mt-[20px] gap-[26px]">{isLoading && (<img src={loader} alt="loader" className = "w-[100px] h-[100px] object-contain"/>)}

            {!isLoading && Campaigns.length === 0 && (
                <p className="font-epilogue font-semibold text-[14px] leading-[30px]">You have not created any campaigns yet</p>
            ) }

            {!isLoading && Campaigns.length > 0 && Campaigns.map((campaign)=><FundCard 
                key={campaign.id}
                {...campaign}
                handleClick={()=> handleNavigate(campaign)}
                />)}
            </div>
        </div>
    )

}

export default DisplayCampaigns