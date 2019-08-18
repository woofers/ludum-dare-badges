import React from 'react'
import Typography from '@material-ui/core/Typography'

const Text = p => (
  <Typography variant={p.variant} component={p.component || p.variant}>
    {p.children}
  </Typography>
)

export default Text
