import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import SectionTelevisores from '../../containers/lista-televisores';
import SectionFake from '../../containers/fake-section';

const TabsComponent = () => {
  const [selected, setSelected] = React.useState('cells');
  console.log(selected);
  const handleChange = (_, value) => {
    setSelected(value);
  }

  const selectedSection = (value) => {
    switch (value) {
      case 'cells':
        return <SectionFake />;
      case 'tvs':
        return  <SectionTelevisores />;
      case 'lavarropa':
        return  <Box>lavarropas</Box>;
      default:
        return <Box></Box>;
    }
  }

  return (
  <Box>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={selected} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Celulares" value="cells" />
      <Tab label="Televisores" value="tvs" />
      <Tab label="Lavarropas" value="lavarropa" />
    </Tabs>
    </Box>
    <Box m={2}>
      { selectedSection(selected) }
    {/* {
      selected === 'cells' ?
      <Box>Celulares</Box>
      :
      null
    }
        {
      selected === 'tvs' ?
      <SectionTelevisores />
      :
      null
    }
        {
      selected === 'lavarropa' ?
      <Box>lavarropas</Box>
      :
      null
    } */}
    </Box>
  </Box>
  )
}

export default TabsComponent;