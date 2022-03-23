import React, { useState } from 'react'
import { Container,Grid,Typography,Box, Backdrop } from '@mui/material'
import { display, textAlign } from '@mui/system'

const MediaHighlights = () => {
    const mediaHighlightsContents=[
        {
            departments:'Department of Social Justice',
            disc:""
        },
        {
            departments:"Department of Disability Affairs",
            disc:""
        },
        {
            departments:'National Insitute for the Orthopaedically Handicapped',
            disc:""
        },
     
    ]

    const [tableIndex,setTableIndex]=useState(0)

  return (
    <Container>
        <Grid sx={{placeItems:'center', display:'grid' }} mt={4}>
        <Typography sx={{fontSize:32,fontWeight:500,borderBottom:2, borderColor:'#FF725E'}}>Media Highlights</Typography>
        <Box container  sx={{my:4,display:'flex' ,width:'82%',justifyContent:'space-between', height:'16rem', border:2, borderColor:'black' }} mr={10} >
            <Box container   sx={{width:'32%',height:'100%', display:'flex' ,flexDirection:'column' ,justifyContent:'space-around'   }} >
                {mediaHighlightsContents.map((content,index)=>(
                    <Box  sx={{ width:"100%",height:'100%', color:'white', textAlign:"center",color:'black' ,border:1,display:"grid",placeItems:'center',cursor:"pointer", backgroundColor:"rgba(255, 114, 94, 0.2)"  
                    }} key={index} onClick={()=>{setTableIndex(index)}}>
                        {content.departments}
                    </Box>
                ))
                    }
            </Box>
            <Box container sx={{width:'68%',height:'100%',placeItems:'center'}} p={4}>
                    <Typography varient="body" sx={{fontSize:13,textAlign:'center'}}  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec adipiscing diam facilisi potenti tincidunt sed lacus, cursus. Maecenas volutpat consectetur

sagittis, vestibulum tellus donec eu lobortis enim. Feugiat pharetra fames blandit mauris nunc. Ultrices fermentum porttitor a, lacus. Tellus netus facilisi tellus viverra iaculis morbi. Dignissim ipsum dignissim ac cras arcu sed

tincidunt. Mattis consectetur vel quam libero maecenas. Lectus aliquam augue id consequat. Vel aliquam pellentesque molestie malesuada vitae, nulla risus. 
                    </Typography>
            </Box>
        </Box>
        </Grid>
    </Container>
  )
}

export default MediaHighlights