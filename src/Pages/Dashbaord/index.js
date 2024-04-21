import {
  CalendarOutlined,
  UserAddOutlined,
  FileTextOutlined,
  DiffOutlined,
  FolderOpenOutlined,
} from '@ant-design/icons';
import {
  Card,
  Space,
  Statistic,
  Table,
  Typography,
  Badge,
  Calendar,
  Button,
  Modal,
  Col,
  Row,
} from 'antd';
import { Progress } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { motion } from 'framer-motion';
import "./style.css"



// Function to count patients created on a specific day
const countPatientsByDay = (patients, targetDate) => {
  // Convert targetDate to the same format as createdAt
  const targetDateString = targetDate.toISOString().split('T')[0];

  // Filter patients created on the target date
  const patientsCreatedOnDay = patients.filter(patient => {
    const createdAtDate = patient.createdAt.split('T')[0];
    return createdAtDate === targetDateString;
  });

  // Return the count of patients created on the target date
  return patientsCreatedOnDay.length;
};

function Dashboard() {
  // les données des patients
  const [patientCount, setPatientCount] = useState(0);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = () => {
    axios
      .get('/api/patients')
      .then((response) => {
        const resultatData = response.data['hydra:member'];
        const count = resultatData.length;
        setPatientCount(count);

        const currentDate = new Date();
        const patientCountToday = countPatientsByDay(resultatData, currentDate);
        console.log("Number of patients created today:", patientCountToday);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  };
  

  // les données des ordonances
  const [ordonanceCount, setOrdonanceCount] = useState(0);

  useEffect(() => {
    fetchOrdonance();
  }, []);

  const fetchOrdonance = () => {
    axios
      .get('/api/ordonances')
      .then((response) => {
        const ordonanceData = response.data['hydra:member'];
        const count = ordonanceData.length;
        setOrdonanceCount(count);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  };

  // les données des rendez-vous
  const [rendezvousCount, setRendezvousCount] = useState(0);

  useEffect(() => {
    fetchRendezvous();
  }, []);

  const fetchRendezvous = () => {
    axios
      .get('/api/rendezvouses')
      .then((response) => {
        const rendezvousData = response.data['hydra:member'];
        const count = rendezvousData.length;
        setRendezvousCount(count);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  };

  // les données des examentests

  const [examentestCount, setExamentestCount] = useState(0);

  useEffect(() => {
    fetchExamentest();
  }, []);

  const fetchExamentest = () => {
    axios
      .get('/api/examentests')
      .then((response) => {
        const examentestData = response.data['hydra:member'];
        const count = examentestData.length;
        setExamentestCount(count);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  };

  // les données des examenresultasts

  const [examenresultatCount, setExamenresultatCount] = useState(0);

  useEffect(() => {
    fetchExamenresultat();
  }, []);

  const fetchExamenresultat = () => {
    axios
      .get('/api/examenresultats')
      .then((response) => {
        const examenresultatData = response.data['hydra:member'];
        const count = examenresultatData.length;
        setExamenresultatCount(count);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  };

  //affichage

  return (
    <motion.div
      initial={{ opacity: 0, translateX: -10, translateY: -10 }}
      animate={{ opacity: 1, translateY: -10 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    >
      <Space size={20} direction='vertical'>
        <Typography.Title level={4}>Tableau de bord</Typography.Title>
        <Space direction='horizontal'>
          <Row gutter={[16, 16]}>
            <Row>
              <Col xs={{ span: 5, offset: 1 }}>
                <DashboardCard
                  icon={
                    <UserAddOutlined
                      style={{
                        color: 'blue',
                        backgroundColor: 'rgba(0,0,255,0.25)',
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                      }}
                    />
                  }
                  title={'Patient'}
                  value={patientCount}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }}>
                <DashboardCard
                  icon={
                    <FileTextOutlined
                      style={{
                        color: 'green',
                        backgroundColor: 'rgba(0,255,0,0.25)',
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                      }}
                    />
                  }
                  title={'Examen tests'}
                  value={examentestCount}
                />
              </Col>
            </Row>
          </Row>
          <Row gutter={[16, 16]}>
            <Row>
              <Col xs={{ span: 5, offset: 1 }}>
                <DashboardCard
                  icon={
                    <CalendarOutlined
                      style={{
                        color: 'blue',
                        backgroundColor: 'rgba(0,0,255,0.25)',
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                      }}
                    />
                  }
                  title={'Rendez-Vous'}
                  value={rendezvousCount}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }}>
                <DashboardCard
                  icon={
                    <FileTextOutlined
                      style={{
                        color: 'green',
                        backgroundColor: 'rgba(0,255,0,0.25)',
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                      }}
                    />
                  }
                  title={'Examen resultats'}
                  value={examenresultatCount}
                />
              </Col>
            </Row>
          </Row>
          <Row gutter={[16, 16]}>
            <Row>
              <Col xs={{ span: 5, offset: 1 }}>
                <DashboardCard
                  icon={
                    <DiffOutlined
                      style={{
                        color: 'blue',
                        backgroundColor: 'rgba(0,0,255,0.25)',
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                      }}
                    />
                  }
                  title={'Ordonances'}
                  value={ordonanceCount}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 5, offset: 1 }}>
                <DashboardCard
                  icon={
                    <FolderOpenOutlined
                      style={{
                        color: 'green',
                        backgroundColor: 'rgba(0,255,0,0.25)',
                        borderRadius: 20,
                        fontSize: 24,
                        padding: 8,
                      }}
                    />
                  }
                  title={'Dossiers Medicaux'}
                  value={patientCount}
                />
              </Col>
            </Row>
          </Row>
        </Space>
       
          <DerniersRv />
          
            <DashboardCalendar />
         
      
      </Space>
    </motion.div>
  );
}

// le composant de carte
function DashboardCard({ title, value, icon }) {
  return (
    <Card
      style={{
        height: '120px',
        width: '380px',
        borderRadius: '20px',
        border: 'none',
        boxShadow: '2px 6px 14px rgba(0, 0, 0.1, 0.2)', // Adding box shadow
      }}
    >
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

// le composant des derniers rendez-vous
function DerniersRv() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage] = useState(1);
  const [pageSize] = useState(5);
  const [, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchRendezvouss = () => {
      const params = {
        page: currentPage,
        itemsPerPage: 3,
        'order[created_at]': 'DESC'
      };

      axios
        .get("/api/rendezvouses?pagination=true", { params })
        .then((response) => {
          setDataSource(response.data['hydra:member']);
          setTotalItems(response.data['hydra:totalItems']);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données depuis l'API :", error);
          setLoading(false);
        });
    };

    setLoading(true);
    fetchRendezvouss();
  }, [currentPage, pageSize]);

  const columns = [
    { title: 'Nom de patient',dataIndex: 'nomPatient', key: 'nomPatient'},
    { title: 'Email de patient',dataIndex: 'emailPatient',key: 'emailPatient'},
    { title: 'Maladie', dataIndex: 'maladie', key: 'maladie' },
    { title: 'Medecin', dataIndex: 'medecin', key: 'medecin' },
    { title: 'Date de rendez-vous',dataIndex: 'dateRv',key: 'dateRv',render: (dateRv) => moment(dateRv).format('YYYY-MM-DD HH:mm:ss'), },
  ];

  return (
    <Card style={{width: '100%',borderRadius: '10px',
    border: '2px solid rgba(0, 0, 0, 0.1)',boxShadow: '2px 6px 14px rgba(0, 0, 0.1, 0.2)' }} title='Les derniers rendez-vous'>
    
          <>
            <Table
              columns={columns}
              loading={loading}
              dataSource={dataSource}
              pagination={false}
              size='small'
            ></Table>
          </>
       
    </Card>
  );
}

//le composant de calendrier
const DashboardCalendar = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetchRendezvousData();
  }, []);

  const fetchRendezvousData = () => {
    axios
      .get('/api/rendezvouses')
      .then((response) => {
        const rendezvousData = response.data['hydra:member'];
        const events = rendezvousData.map((rendezvous) => ({
          date: moment(rendezvous.dateRv).format('YYYY-MM-DD'),
          title: rendezvous.nomPatient,
          rendezvousDate: rendezvous.dateRv,
        }));
        setEventsData(events);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  };

  const dateCellRender = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    const events = eventsData.filter((event) => event.date === formattedDate);
    const isPastDate = moment(date).isBefore(moment(), 'day'); 
    const cellClass = isPastDate ? 'disabled-cell' : '';

    return (
      <div  className={`events ${cellClass}`}>
        {events.map((event, index) => (
          <div key={index}>
            <Badge
              status='success'
              text={`${event.title} - ${moment(event.rendezvousDate).format(
                'HH:mm:ss'
              )}`}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card style={{width: '100%',borderRadius: '10px',
    border: '2px solid rgba(0, 0, 0, 0.1)',boxShadow: '2px 6px 14px rgba(0, 0, 0.1, 0.2)' }} title='Calendrier'>
      <>
      <Calendar dateCellRender={dateCellRender} />
      </>
    </Card>
  );
};

export default Dashboard;
