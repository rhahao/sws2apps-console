import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PendingIcon from '@mui/icons-material/Pending';
import Typography from '@mui/material/Typography';
import Card from './components/Card';

const iconsProps = { fontSize: '40px', marginRight: '10px' };

const Congregations = ({ isProcessing }) => {
	const congregationsSummary = [
		{
			id: 'cong-requests',
			label: 'Pending Requests',
			count: 3,
			icon: <PendingIcon sx={{ color: 'blue', ...iconsProps }} />,
		},
		{
			id: 'cong-active',
			label: 'Active Congregations',
			count: 11,
			icon: <HomeWorkIcon sx={{ color: 'green', ...iconsProps }} />,
		},
	];

	return (
		<Card
			title='Congregations'
			bgColor={green[100]}
			Icon={<HomeWorkIcon className='card-icon' />}
		>
			{isProcessing && (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '65%',
					}}
				>
					<CircularProgress color='secondary' size={40} disableShrink={true} />
				</Box>
			)}
			{!isProcessing && (
				<Box
					sx={{
						marginTop: '30px',
						display: 'flex',
						justifyContent: 'space-between',
						flexWrap: 'wrap',
						gap: '10px',
					}}
				>
					{congregationsSummary.map((summary) => (
						<Box
							key={summary.id}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								marginBottom: '5px',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								{summary.icon}
								<Box>
									<Typography>{summary.label}</Typography>
									<Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
										{summary.count}
									</Typography>
								</Box>
							</Box>
						</Box>
					))}
				</Box>
			)}
		</Card>
	);
};

export default Congregations;
