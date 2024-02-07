import React , {useState} from "react";
import "./SideBar.css";
import SideBarOptions from "../SideBarOptions/SideBarOptions";
import HomeIcon from '@mui/icons-material/Home';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RedditIcon from '@mui/icons-material/Reddit';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import HelpOutlineOutlined from "@mui/icons-material/HelpOutlineOutlined";
import AddIcon from '@mui/icons-material/Add';


function SideBar() {
  const [showCreateCommunity, setShowCreateCommunity] = useState(false);
  const [showResources, setShowResources] = useState(false);


  const handleToggleCreateCommunity = () =>{
    setShowCreateCommunity(!showCreateCommunity);
  }

  const handleToggleResources = () =>{
    setShowResources(!showResources);
   }



  return (
    <div className="sidebar">
      <SideBarOptions Icon={HomeIcon}title='Home'/>
      <SideBarOptions  Icon={LocalFireDepartmentOutlinedIcon} title='Popular'/>
      <SideBarOptions  Icon={InsertChartOutlinedTwoToneIcon} title='All'/>
      <hr className="separator"/>
      <h5 className="communities" onClick={handleToggleCreateCommunity}>
          COMMUNITIES
          <span className="dropdown-arrow">
            {showCreateCommunity ? <ExpandMore /> : <ExpandLess />}
          </span>
        </h5> 
        {showCreateCommunity && (
          
            <SideBarOptions 
            className="community-option"
            Icon={AddIcon} title ='Create Community'/>
        
        )}

      <hr className="separator"/>

      <h5 className="resources" onClick={handleToggleResources}>
          RESOURCES
          <span className="dropdown-arrow">
            {showResources ? <ExpandMore /> : <ExpandLess />}
          </span>
        </h5> 

      {showResources && (
        <>
        <SideBarOptions 
        className="community-option"
        Icon={RedditIcon} title ='About'/>
        <SideBarOptions 
            className="community-option"
            Icon={CampaignOutlinedIcon} title ='Advertise'/>
            <SideBarOptions 
            className="community-option"
            Icon={HelpOutlineOutlined} title ='Help'/>
            <SideBarOptions 
            className="community-option"
            Icon={AutoStoriesOutlinedIcon} title ='Blog'/>
            <SideBarOptions 
            className="community-option"
            Icon={BuildOutlinedIcon} title ='Carrers'/>
            <SideBarOptions 
            className="community-option"
            Icon={KeyboardVoiceOutlinedIcon} title ='Pres'/>
           </>
      )}

    </div>
  );
}

export default SideBar;
