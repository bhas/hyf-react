import { Card, CardContent, Avatar, Chip, Tooltip, Box, Stack } from '@mui/material';

// Exercise 3
// MUI components used:
// - <Avatar>       replaces the avatar div
// - <Chip>         replaces each tag <span>
// - <Tooltip>      wraps the first Chip
// - <Card> + <CardContent>  replace the outer profile div
export default function ProfileCard() {
  const tags = ['Sustainability', 'Minimalism', 'Plants', 'Ceramics'];

  return (
    <div className="exercise">
      <h2>Exercise 3 — Card, Avatar, Chip, Tooltip</h2>
      <p>
        Convert this profile to use MUI{' '}
        <code>Card</code>, <code>Avatar</code>, <code>Chip</code>, and <code>Tooltip</code>.
      </p>
      <hr />

      <Card sx={{ maxWidth: 480 }}>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>SV</Avatar>
            <Box>
              <h3 style={{ margin: '0 0 4px' }}>Sophie van der Berg</h3>
              <p style={{ margin: '0 0 8px', color: '#666' }}>Interior designer · Amsterdam</p>
              <p style={{ margin: '0 0 12px' }}>
                Passionate about sustainable living and modern Scandinavian design.
              </p>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {tags.map((tag, i) =>
                    <Tooltip key={tag} title="Click to filter">
                      <Chip label={tag} color="primary" variant="outlined" />
                    </Tooltip>
                )}
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
