"use client"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { dataOverview } from '@/constants';

import HighlightedCard from './HighlightedCard';
import PageViewsBarChart from './PageViewsBarChart';
import StatCard from './StatCard';
import SessionsChart from './SessionsChart';

const DataOverview = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {dataOverview.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <HighlightedCard />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <SessionsChart />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
    </Box>
  )
}

export default DataOverview