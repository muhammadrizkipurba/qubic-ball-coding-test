"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CgInsights } from 'react-icons/cg';

export default function HighlightedCard() {

  return (
    <Card sx={{ height: '100%' }} style={{borderRadius: "12px"}}>
      <CardContent className='hover:bg-slate-50 border-b border-slate-200 dark:bg-gray-300 dark:hover:bg-gray-200 transition-colors duration-300 h-full'>
        <CgInsights />
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600' }}
        >
          Explore your data
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          Uncover performance and visitor insights with our data wizardry.
        </Typography>
      </CardContent>
    </Card>
  );
}