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
  DatePicker,
} from 'antd';
import { Progress } from 'antd';
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import { motion } from 'framer-motion';
import './style.css';








function Dashboard({ data  }) {
  const datePickerRef = useRef(null); // Create a ref for the DatePicker component

  const [patientCount, setPatientCount] = useState(data ? data.patientCount : 0);
  const [ordonanceCount, setOrdonanceCount] = useState(data ? data.ordonanceCount : 0);
  const [rendezvousCount, setRendezvousCount] = useState(data ? data.rendezvousCount : 0);
  const [examentestCount, setExamentestCount] = useState(data ? data.examentestCount : 0);
  const [examenresultatCount, setExamenresultatCount] = useState(data ? data.examenresultatCount : 0);
  const [patients, setPatients] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // Selected date
  const [selectedDate2, setSelectedDate2] = useState([]); // Selected date
  const [patientCountToday, setPatientCountToday] = useState(data ? data.patientCountToday : 0);
  useEffect(() => {
      if (data) {
        setPatientCount(data.patientCount);
        setOrdonanceCount(data.ordonanceCount);
        setRendezvousCount(data.rendezvousCount);
        setExamenresultatCount(data.examenresultatCount);
        setExamentestCount(data.examentestCount);
        setPatientCountToday(data.patientCountToday);
      }
    }, [data]);

   
      
  if (!data) {
    // Render a loading state or return null if dashboard data is not available yet
    return null;
  }

  

  const filterPatientsByDate = async (date) => {
    if (!date) return { filteredPatients: [], filteredDate: null };
  
    const formattedDate = moment(date).format('YYYY-MM-DD'); // Format selected date
    const url = `/api/patients?created_at=${formattedDate}`;
  
    try {
      const response = await axios.get(url);
      const filteredPatients = response.data; // Assuming the API returns the filtered patients directly
      return { filteredPatients, filteredDate: formattedDate };
    } catch (error) {
      console.error('Error filtering patients by date:', error);
      return { filteredPatients: [], filteredDate: null };
    }
  };
  
  const filterPatientsByDate2 = async (strictlyAfterDate, strictlyBeforeDate) => {
    if (!strictlyAfterDate || !strictlyBeforeDate) return { filteredPatients2: [], filteredStartDate: null, filteredEndDate: null };
    
    const formattedStrictlyAfterDate = moment(strictlyAfterDate).format('YYYY-MM-DD');
    const formattedStrictlyBeforeDate = moment(strictlyBeforeDate).format('YYYY-MM-DD');
    const url2 = `/api/patients?created_at[after]=${formattedStrictlyAfterDate}&created_at[before]=${formattedStrictlyBeforeDate}`;
    
    try {
      const response = await axios.get(url2);
      const filteredPatients2 = response.data;
      return { filteredPatients2, filteredStartDate: formattedStrictlyAfterDate, filteredEndDate: formattedStrictlyBeforeDate };
    } catch (error) {
      console.error('Error filtering patients by date:', error);
      return { filteredPatients2: [], filteredStartDate: null, filteredEndDate: null };
    }
  };
  
  //ordonanace
  const filterOrdonancesByDate = async (date) => {
    if (!date) return { filteredOrdonances: [], filteredDate: null };
  
    const formattedDate = moment(date).format('YYYY-MM-DD'); // Format selected date
    const url = `/api/ordonances?created_at=${formattedDate}`;
  
    try {
      const response = await axios.get(url);
      const filteredOrdonances = response.data; // Assuming the API returns the filtered patients directly
      return { filteredOrdonances, filteredDate: formattedDate };
    } catch (error) {
      console.error('Error filtering patients by date:', error);
      return { filteredOrdonances: [], filteredDate: null };
    }
  };
  
  const filterOrdonancesByDate2 = async (strictlyAfterDate, strictlyBeforeDate) => {
    if (!strictlyAfterDate || !strictlyBeforeDate) return { filteredOrdonances2: [], filteredStartDate: null, filteredEndDate: null };
    
    const formattedStrictlyAfterDate = moment(strictlyAfterDate).format('YYYY-MM-DD');
    const formattedStrictlyBeforeDate = moment(strictlyBeforeDate).format('YYYY-MM-DD');
    const url2 = `/api/ordonances?created_at[after]=${formattedStrictlyAfterDate}&created_at[before]=${formattedStrictlyBeforeDate}`;
    
    try {
      const response = await axios.get(url2);
      const filteredOrdonances2 = response.data;
      return { filteredOrdonances2, filteredStartDate: formattedStrictlyAfterDate, filteredEndDate: formattedStrictlyBeforeDate };
    } catch (error) {
      console.error('Error filtering patients by date:', error);
      return { filteredOrdonances2: [], filteredStartDate: null, filteredEndDate: null };
    }
  };
  
  

    
    
 // Handle date change
// Handle date change
const handleDateChange = async (date, dateString) => {
  setSelectedDate(dateString); // Update selected date
  // Filter patients for the selected date
  const { filteredPatients, filteredDate } = await filterPatientsByDate(dateString);
  const { filteredOrdonances, filteredDate2 } = await filterOrdonancesByDate(dateString);
  // Update state with filtered patients
  setPatientCount(filteredPatients['hydra:member'].length);
  setOrdonanceCount(filteredOrdonances['hydra:member'].length);


};
const handleDateChange2 = async (dates, dateStrings) => {
  const [strictlyAfterDate, strictlyBeforeDate] = dateStrings; // Destructure the dateStrings array
  // Filter patients for the selected date range
  setSelectedDate2(dateStrings); // Update selected date

  const { filteredPatients2, filteredStartDate, filteredEndDate } = await filterPatientsByDate2(strictlyAfterDate, strictlyBeforeDate);
  setPatientCount(filteredPatients2['hydra:member'].length);

  const { filteredOrdonances2, filteredStartDate2, filteredEndDate2 } = await filterOrdonancesByDate2(strictlyAfterDate, strictlyBeforeDate);
  // Update state with filtered patients
  setOrdonanceCount(filteredOrdonances2['hydra:member'].length);
  console.log(filteredPatients2['hydra:member']);
};


// Render the filtered patients




    // Get filtered patients based on the selected date
    const filteredPatients2 = filterPatientsByDate2(selectedDate);

  
  

  const handleCountTodayClick = () => {

    setPatientCount(patientCountToday);

    

  };
  
  const handleReset = () => {

    setPatientCount(data.patientCount);
    setOrdonanceCount(data.ordonanceCount)
    setSelectedDate(null); // Clear the selected date
setSelectedDate2([]);
if (datePickerRef.current) {
  datePickerRef.current.picker.clearSelection();
}


  };
  // Function to handle date clearing

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
  };
 
  
  //affichage

  return (
    <motion.div
    
      initial={{ opacity: 0, translateX: -10, translateY: -10 }}
      animate={{ opacity: 1, translateY: -10 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.7 }}
    >
      <Space size={[20, 20]}  direction='vertical'>
        <Typography.Title level={4}>Tableau de bord</Typography.Title>
     
        <div style={buttonContainerStyle}>
        <DatePicker
        onChange={handleDateChange}
      
      />
      <DatePicker.RangePicker
        onChange={handleDateChange2}
     
       
      />


        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCountTodayClick}>Année</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCountTodayClick}>Mois</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleCountTodayClick}>jour</button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" type='default' onClick={handleReset}>Reset</button>
        </div>

        <Space direction='horizontal'>
          <Row   gutter={[16, 16]}>
            <Row  >
              <Col offset={2} xs={24} sm={12} md={8} lg={6} xl={6}>
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
              <Col  offset={2} xs={24} sm={12} md={8} lg={6} xl={6}>
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
              <Col offset={2} xs={24} sm={12} md={8} lg={6} xl={6}>
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
              <Col offset={2} xs={24} sm={12} md={8} lg={6} xl={6}>
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
              <Col offset={2} xs={24} sm={12} md={8} lg={6} xl={6}>
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
              <Col offset={2} xs={24} sm={12} md={8} lg={6} xl={6}>
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
      width: '300px',
      borderRadius: '20px',
      border: 'none',
      boxShadow: '2px 6px 14px rgba(0, 0, 0.1, 0.2)',
    
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
