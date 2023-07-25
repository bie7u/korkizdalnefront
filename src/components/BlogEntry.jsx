import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./BlogEntry.css";


const titleStyle = {
    color: 'black',
    fontSize: '1.1rem'
}

const BlogEntry = ({blogDetail}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const title = blogDetail.blog.title
    const text = blogDetail.blog.text
    const picture = blogDetail.blog.picture
  
    return (
      <div className="blog-entry">
        <div className="blog-entry-presentation" onClick={handleOpen}>
            <img src={picture} width={350} height={220}/>
            <Button fullWidth sx={titleStyle}>{title}</Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-box">
            <Typography id="modal-modal-title" variant="h3" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <textarea readonly disabled className='blog-entry-text-area'>
            {text}
            </textarea>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
}

export default BlogEntry