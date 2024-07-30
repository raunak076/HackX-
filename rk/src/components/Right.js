import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Right = () => {
  return (
    <Box
    flex={2}
    p={2}
    sx={{display:{xs:"none",sm:"block"}}}
    >
        <Box position={'fixed'} width={300}>
     <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
     <AvatarGroup max={7}>
      <Avatar alt="hemy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="aravis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="rindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="egnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="krevor Henderson" src="/static/images/avatar/5.jpg" />
      <Avatar alt="rindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="sgnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="hrevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
    <Typography variant='h6' fontWeight={100}>
        Latest Uploads
    </Typography>
    <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
            <img src='data:image/jpeg;base64,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' />
        </ImageListItem>
        <ImageListItem>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZmKsO-CncItIKydtCdwYpjA13ViUC-lLPQ&usqp=CAU' />
        </ImageListItem>
        <ImageListItem>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWm5ww8d8DvVbADbtlHJKirV2okkmS_XPiw&usqp=CAU' />
        </ImageListItem>
    </ImageList>
    <Typography variant='h6' fontWeight={200}>
        Latest Conversations
    </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Har Har Mahadev" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/l/p/b/large-na-shiv-ji-poster-shiv-bhagwan-poster-mahadev-poste-01045-original-imagz84thnfzbyyd.jpeg?q=90" />
        </ListItemAvatar>
        <ListItemText
          primary="Har Har Mahadev"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              Mahakaal
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7G2EpAFAJabsyw1SScE4dbwF0IGu0-fnuyw&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Om Bhagwate Vasudevaye Namah"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               MahaVishnu
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
   </Box>
  )
}

export default Right
