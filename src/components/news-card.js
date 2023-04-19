import { useState } from 'react'
import { 
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  IconButtonProps,
  Typography,
  styled
} from '@mui/material'
import { red } from '@mui/material/colors'
import Collapse from '@mui/material/Collapse'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Link from 'next/link'


const ExpandMoreProps = {
  ...IconButtonProps,
  expand: true,
}

const ExpandMore = styled(( ExpandMoreProps ) => {
  const { expand, ...other } = ExpandMoreProps
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const getSourceAbbreviation = ({ name }) => {
  const sourceName = name.split(' ')
  if (sourceName[0] === 'The') {
    sourceName.shift()
  }

  return sourceName.map((word) => word[0]).join('')
}

const getPublishedAtDate = (publishedAt) => {
  const publishedAtDate = new Date(publishedAt)
  return publishedAtDate.toLocaleDateString()
}

const NewsCard = ({
  title,
  description,
  url,
  content,
  urlToImage,
  source,
  publishedAt
}) => {
  const publishedAtDate = getPublishedAtDate(publishedAt)
  const sourceAbbreviation = getSourceAbbreviation(source)

  const imageUrl = urlToImage || 'https://placehold.jp/400x400.png'
  const altText = urlToImage ? title : 'Placeholder image'

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card width={345}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label={source.name}>
            {sourceAbbreviation}
          </Avatar>
        }
        title={title}
        subheader={publishedAtDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt={altText}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" 
          sx={expanded 
            ? {
              display: 'none',
            } : {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {content}
          </Typography>
          <Link href={url}>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="end"
            >
                  Read More on {source.name}
            </Typography>
          </Link>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default NewsCard
