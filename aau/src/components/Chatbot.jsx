// import React, { useState, useRef, useEffect } from 'react';
// import { Container, Box, Typography, TextField, Button, Avatar, Paper, IconButton, CircularProgress, useTheme } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import PersonIcon from '@mui/icons-material/Person';
// import axios from 'axios';

// const Chatbot = () => {
//   const theme = useTheme();
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [typingText, setTypingText] = useState('');
//   const [typingComplete, setTypingComplete] = useState(false);
//   const messagesEndRef = useRef(null);

//   // System message with all the AAU information
//   const systemMessage = {
//     role: "system",
//     content: `You are a helpful assistant for Addis Ababa University freshman students. Here's all the important information:
// #Addis Ababa University (AAU) Campuses Overview
// - AAU has 13 campuses located in and around Addis Ababa.
// - First registration is done online via aau.edu.et, where you receive your UGR and password to register for freshman courses when registration opens.
//     ### Registration Information
//     - Registration is done at the registrar office in the main administration building
//     - Required documents: Admission letter, 2 passport photos, original educational certificates
//     - Registration period: Usually within 2 weeks after the announced registration date
//     - FBE campus is located Sidest kilo in front of the main campus 
//     # Main Campus (Sidist Kilo)
//         - Location: Sidist Kilo, central administrative hub.
//         - Features: Beautiful garden, digital library, and John F. Kennedy Library.
//         - Services: Dormitory and meal service for both male and female students.
//         - Registration: Main registrar office located at 5th gate of the campus.
//         #Arat Kilo Campus (College of Natural and Computational Sciences)
//         - Location: 4 Kilo area.
//         - Departments: Computer Science, Biology, Physics, and other natural sciences.
//         - Services: Dormitory and meal service for both male and female students.
//     #Amist Kilo Campus (AAIT – Addis Ababa Institute of Technology)
//     - Location: Around Amist Kilo, near the Ethnological Museum.
//     - Departments: All engineering streams (e.g., Software, Electrical, Mechanical, Civil, Chemical).
//     - Structure: Dormitories and classrooms are on separate sides of an asphalt road.
//     - Requirement: One-semester pre-engineering course after freshman year to select stream (based on GPA).
//     - Services: Dormitory and food service for both male and female students.
//     # College of Health Sciences (Tikur Anbessa/Black Lion)
//     - Location: Lideta Subcity, Woreda 9.
//     - Two Campuses:
//       - Sefer Selam Campus (Autobus Tera): For pre-clinical students and departments like Nursing, Anesthesia, Pharmacy.
//        - Tikur Anbessa Campus: For clinical practice and internships; located near Tikur Anbessa Hospital.
//         - Dental students: Conduct clinical study at Yekatit 12 College within Yekatit 12 Hospital.
//          - Services: Dormitories for both male and female students on each campus.
//         ### ID and Cards
//     - ID office is in Arat Kilo Admin Building, open Mon–Fri, 9 AM–5 PM
//     - Bring your registration slip and 1 passport photo for ID card
//     - Student ID is required for all university services
//     # Faculty of Business and Economics (FBE)
//     - Location: Sidist Kilo, in front of the Main Campus; building known as Ehetu Chole.
//      - Departments: Accounting, Management, Economics, and Information Systems (under Arat Kilo).
//      - Features: Large hall used for social events, beautiful garden.
//       - Services: Dormitory and food service for both male and female students.
//     # Debre Zeit Campus (College of Veterinary Medicine and Agriculture)
//    - Location: Bishoftu (Debre Zeit).
//     - Department: Veterinary Medicine and Agriculture.
//      - Assignment: Based on GPA or student’s preference.
//      # EiABC (Ethiopian Institute of Architecture, Building Construction, and City Development)
//     - Location: Around Mexico, Lideta area.
//      - Departments: Architecture, COTM (Construction Technology and Management), Urban Planning.
//      - Requirement: Completion of pre-engineering course, placement based on GPA.
//       - Note: Architecture is highly competitive and requires top GPA
//       ### Academic Services
//     - Library registration is done online at library.aau.edu.et
//     - Department offices handle course registration and academic advising
//     - Information System department is under Arat kilo campus but for some reasons now it is given in FBE campus
//     - Class schedules are posted on department notice boards
//     # Dormitory & Meal Services
//      - Provided for both male and female students on most campuses.
//      - For assistance: Contact Student Services on your campus.
//       - Dormitory proctors are available on the ground floor of each dormitory building.
//     ### Housing and Dining
//     - Dorm assignments are handled at the registrar office
//     - Dormitory fees must be paid at the finance office first
//     - Cafeterias operate from 7:00 AM to 7:00 PM daily
//    # Clearance Process
//     Step 1: Visit the Registrar Office on your campus to get a clearance form.
//     Step 2: Collect signatures from the following in order:
//         Library (specific to your department's campus – e.g., Arat Kilo for Information Systems).
//         Student Services (meal & dormitory coordinator).
//         Department Coordinator.
//     Step 3: Final signature is from the Registrar Office.
//     Keep one copy for yourself, and submit one to the registrar.
//     ### Campus Facilities
//     - The main library is at Sidist Kilo campus 
//     - Sidist Kilo campus have two libraries which are kendy and digital.
//     - Health center is located near the main library
//     - Sports facilities are available at Sidist Kilo and Arat Kilo campuses
    
//     ### Other Services
//     - The nearest printing shop is beside the AAU main gate
//     - Student union office provides various student support services
//     - WiFi access requires student ID registration at the ICT center
    
//     ### Important Contacts
//     - Registrar office: +251 111 239 767
//     - Main library: +251 111 239 464
//     - Health center: +251 111 223 344
    
//     Always be polite, patient and provide accurate information. If you don't know something, say you don't know rather than guessing.`
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, typingText]);

// useEffect(() => {
//   if (typingComplete && typingText) {
//     // Add the final assistant message only if not already added
//     setMessages(prev => {
//       // Check last message is not assistant with same content to avoid duplicates
//       const lastMessage = prev[prev.length - 1];
//       if (lastMessage?.role === 'assistant' && lastMessage.content === typingText) {
//         return prev;
//       }
//       return [...prev, { role: 'assistant', content: typingText }];
//     });
//   }
// }, [typingComplete, typingText]);


//  const callAI = async (userMessage) => {
//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-3.5-turbo',
//         messages: [systemMessage, ...messages, userMessage],
//         temperature: 0.7
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
//         }
//       }
//     );

//     const aiResponse = response.data.choices[0].message.content;

//     setTypingText(aiResponse);
//     setTypingComplete(true);

//     return aiResponse;

//   } catch (directError) {
//     console.warn('OpenAI API failed, trying proxy...', directError);

//     try {
//       const proxyResponse = await axios.post(
//         'http://localhost:5000/api/openai/generate',
//         {
//           messages: [systemMessage, ...messages, userMessage],
//           temperature: 0.7
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         }
//       );

//       const aiResponse = proxyResponse.data.result;

//       setTypingText(aiResponse);
//       setTypingComplete(true);

//       return aiResponse;

//     } catch (proxyError) {
//       console.error('Proxy API failed as well.', proxyError);
//       let errorMessage = 'Sorry, I encountered an error. Please try again later.';

//       if (proxyError.response) {
//         if (proxyError.response.status === 401) {
//           errorMessage = 'Authentication failed. Please check your API key.';
//         } else if (proxyError.response.status === 429) {
//           errorMessage = 'Too many requests. Please wait and try again.';
//         } else if (proxyError.response.data?.error) {
//           errorMessage = `API error: ${proxyError.response.data.error}`;
//         }
//       } else if (proxyError.message) {
//         errorMessage = `Error: ${proxyError.message}`;
//       }

//       throw new Error(errorMessage);
//     }
//   }
// };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!input.trim()) return;

//   const userMessage = { role: 'user', content: input };
//   setMessages(prev => [...prev, userMessage]);
//   setInput('');
//   setIsLoading(true);
//   setError(null);
//   setTypingText('');
//   setTypingComplete(false);

//   try {
//     await callAI(userMessage);  // Just call AI to update typingText with streaming
//   } catch (error) {
//     setError(error.message);
//     setMessages(prev => [...prev, { role: 'assistant', content: error.message }]);
//   } finally {
//     setIsLoading(false);
//   }
// };


//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e);
//     }
//   };

//   const displayMessageContent = (message, index) => {
//     // For assistant messages that are currently being typed
//     if (message.role === 'assistant' && index === messages.length - 1 && !typingComplete && typingText) {
//       return typingText;
//     }
//     return message.content;
//   };

//   return (
//     <Container maxWidth="md" sx={{ py: 4, height: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
//       <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
//         AAU Freshman Assistant
//       </Typography>
//       <Typography variant="h6" component="h2" gutterBottom sx={{ mb: 4 }}>
//         Ask me anything about being a freshman at Addis Ababa University
//       </Typography>

//       <Paper elevation={3} sx={{ 
//         flexGrow: 1, 
//         display: 'flex', 
//         flexDirection: 'column', 
//         p: 2, 
//         mb: 2,
//         backgroundColor: theme.palette.background.paper,
//         overflow: 'hidden'
//       }}>
//         <Box sx={{ 
//           flexGrow: 1, 
//           overflowY: 'auto', 
//           mb: 2,
//           p: 1,
//           '&::-webkit-scrollbar': {
//             width: '6px',
//           },
//           '&::-webkit-scrollbar-track': {
//             background: theme.palette.grey[200],
//           },
//           '&::-webkit-scrollbar-thumb': {
//             background: theme.palette.primary.main,
//             borderRadius: '3px',
//           },
//         }}>
//           {messages.length === 0 ? (
//             <Box sx={{ 
//               height: '100%', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'center', 
//               alignItems: 'center',
//               textAlign: 'center',
//               color: theme.palette.text.secondary
//             }}>
//               <SmartToyIcon sx={{ fontSize: 60, mb: 2, color: theme.palette.primary.main }} />
//               <Typography variant="h6">How can I help you today?</Typography>
//               <Typography>Ask about registration, campus services, academic programs, or anything else!</Typography>
//             </Box>
//           ) : (
//             messages.map((message, index) => (
//               <Box 
//                 key={index} 
//                 sx={{ 
//                   display: 'flex', 
//                   mb: 2,
//                   alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
//                   maxWidth: '80%'
//                 }}
//               >
//                 <Avatar sx={{ 
//                   mr: 1, 
//                   bgcolor: message.role === 'user' ? theme.palette.secondary.main : theme.palette.primary.main,
//                   alignSelf: 'flex-start'
//                 }}>
//                   {message.role === 'user' ? <PersonIcon /> : <SmartToyIcon />}
//                 </Avatar>
//                 <Paper
//                   elevation={2}
//                   sx={{
//                     p: 2,
//                     backgroundColor: message.role === 'user' ? theme.palette.secondary.light : theme.palette.primary.light,
//                     color: message.role === 'user' ? theme.palette.getContrastText(theme.palette.secondary.light) : theme.palette.getContrastText(theme.palette.primary.light),
//                     borderRadius: message.role === 'user' ? '18px 18px 0 18px' : '18px 18px 18px 0',
//                     whiteSpace: 'pre-wrap',
//                     wordBreak: 'break-word'
//                   }}
//                 >
//                   <Typography>
//                     {displayMessageContent(message, index)}
//                     {message.role === 'assistant' && index === messages.length - 1 && !typingComplete && !typingText && (
//                       <span className="animate-blink">|</span>
//                     )}
//                   </Typography>
//                 </Paper>
//               </Box>
//             ))
//           )}
//           {isLoading && !typingText && (
//             <Box sx={{ display: 'flex', mb: 2, ml: 6 }}>
//               <Avatar sx={{ mr: 1, bgcolor: theme.palette.primary.main }}>
//                 <SmartToyIcon />
//               </Avatar>
//               <CircularProgress size={24} sx={{ alignSelf: 'center', mr: 2 }} />
//               <Typography sx={{ alignSelf: 'center' }}>Thinking...</Typography>
//             </Box>
//           )}
//           {error && (
//             <Box sx={{ display: 'flex', mb: 2, ml: 6 }}>
//               <Avatar sx={{ mr: 1, bgcolor: theme.palette.error.main }}>
//                 <SmartToyIcon />
//               </Avatar>
//               <Paper
//                 elevation={2}
//                 sx={{
//                   p: 2,
//                   backgroundColor: theme.palette.error.light,
//                   color: theme.palette.getContrastText(theme.palette.error.light),
//                   borderRadius: '18px 18px 18px 0',
//                 }}
//               >
//                 <Typography>{error}</Typography>
//               </Paper>
//             </Box>
//           )}
//           <div ref={messagesEndRef} />
//         </Box>

//         <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mt: 'auto' }}>
//           <TextField
//             fullWidth
//             variant="outlined"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Ask your question about AAU..."
//             multiline
//             maxRows={4}
//             sx={{ 
//               mr: 1,
//               '& .MuiOutlinedInput-root': {
//                 borderRadius: '20px',
//                 backgroundColor: theme.palette.background.paper,
//               }
//             }}
//           />
//           <IconButton 
//             type="submit" 
//             color="primary" 
//             sx={{ 
//               height: '56px', 
//               width: '56px',
//               backgroundColor: theme.palette.primary.main,
//               color: theme.palette.getContrastText(theme.palette.primary.main),
//               '&:hover': {
//                 backgroundColor: theme.palette.primary.dark,
//               }
//             }}
//             disabled={isLoading || !input.trim()}
//           >
//             <SendIcon />
//           </IconButton>
//         </Box>
//       </Paper>

//       <Box sx={{ mt: 2, textAlign: 'center' }}>
//         <Typography variant="body2" color="text.secondary">
//           Need more help? Visit the registrar office or contact student services.
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default Chatbot;
import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, TextField, Button, Avatar, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';

const Chatbot = () => {
  const theme = useTheme();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [typingText, setTypingText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [systemMessage, setSystemMessage] = useState(null);
  const messagesEndRef = useRef(null);
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


  // AAU Color Theme
  const aauColors = {
    primary: '#0033a0',
    secondary: '#0077c8',
    accent: '#ffd100',
    background: '#f8fafc',
    text: '#1e293b'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch system message from Google Sheets on component mount
  useEffect(() => {
    const fetchSystemMessage = async () => {
      const SHEET_ID = '1WSJYT1SdR4kvpMGLJoc_IlXvBm9s-XFHByFsHHg7pjI';
      const API_KEY = 'AIzaSyBc96UucRCbfIsfgXRcydNKjcmE7C0hSU0';
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/content!A2?key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        console.log("Google Sheets API Response:", response.data);
        
        if (!response.data.values || !response.data.values[0]) {
          throw new Error("Cell A2 is empty or sheet name is incorrect");
        }

        setSystemMessage({
          role: "system",
          content: response.data.values[0][0]
        });

      } catch (error) {
        console.error("Fetch Error:", error);
        setSystemMessage({
          role: "system",
          content: "Fallback message: Could not load content from Google Sheets."
        });
      }
    };

    fetchSystemMessage();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingText]);

  useEffect(() => {
    if (typingComplete && typingText) {
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage?.role === 'assistant' && lastMessage.content === typingText) {
          return prev;
        }
        return [...prev, { role: 'assistant', content: typingText }];
      });
    }
  }, [typingComplete, typingText]);

  const callAI = async (userMessage) => {
  if (!systemMessage) return;

  // Add delay between requests
  await new Promise(resolve => setTimeout(resolve, 2000)); // 20 second delay

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [systemMessage, ...messages, userMessage],
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        timeout: 30000 // Add timeout
      }
    );


      const aiResponse = response.data.choices[0].message.content;
      setTypingText(aiResponse);
      setTypingComplete(true);
      return aiResponse;

    } catch (directError) {
      console.warn('OpenAI API failed, trying proxy...', directError);

      try {
        const proxyResponse = await axios.post(
          'http://localhost:3000/api/openai/generate',
          {
            messages: [systemMessage, ...messages, userMessage],
            temperature: 0.7
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );

        const aiResponse = proxyResponse.data.result;
        setTypingText(aiResponse);
        setTypingComplete(true);
        return aiResponse;

      } catch (proxyError) {
        console.error('Proxy API failed as well.', proxyError);
        let errorMessage = 'Sorry, I encountered an error. Please try again later.';

        if (proxyError.response) {
          if (proxyError.response.status === 401) {
            errorMessage = 'Authentication failed. Please check your API key.';
          } else if (proxyError.response.status === 429) {
            errorMessage = 'Too many requests. Please wait and try again.';
          } else if (proxyError.response.data?.error) {
            errorMessage = `API error: ${proxyError.response.data.error}`;
          }
        } else if (proxyError.message) {
          errorMessage = `Error: ${proxyError.message}`;
        }

        throw new Error(errorMessage);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !systemMessage) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);
    setTypingText('');
    setTypingComplete(false);

    try {
      await callAI(userMessage);
    } catch (error) {
      setError(error.message);
      setMessages(prev => [...prev, { role: 'assistant', content: error.message }]);
    } finally {
      setIsLoading(false);
    }
  };

  const displayMessageContent = (message, index) => {
    if (message.role === 'assistant' && index === messages.length - 1 && !typingComplete && typingText) {
      return typingText;
    }
    return message.content;
  };

  if (!systemMessage) {
    return (
      <Box sx={{
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${aauColors.background} 0%, #ffffff 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <SmartToyIcon sx={{ fontSize: '4rem', color: aauColors.primary }} />
        </motion.div>
        <Typography variant="h6" sx={{ mt: 3 }}>
          Loading AAU Assistant...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100vw',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${aauColors.background} 0%, #ffffff 100%)`,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <Box sx={{
        p: 3,
        background: `linear-gradient(90deg, ${aauColors.primary} 0%, ${aauColors.secondary} 100%)`,
        color: 'white',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            AAU Freshman Assistant
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>
            Ask me anything about being a freshman at Addis Ababa University
          </Typography>
        </motion.div>
      </Box>

      {/* Chat Container */}
      <Box sx={{
        flex: 1,
        overflowY: 'auto',
        p: 3,
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(8px)'
      }}>
        <AnimatePresence>
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: aauColors.text,
                opacity: 0.7
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SmartToyIcon sx={{ fontSize: '4rem', color: aauColors.primary }} />
              </motion.div>
              <Typography variant="h6" sx={{ mt: 3 }}>
                How can I help you today?
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Ask about registration, campus services, academic programs, or anything else!
              </Typography>
            </motion.div>
          ) : (
            messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                  mb: '1rem'
                }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  maxWidth: '90%'
                }}>
                  {message.role !== 'user' && (
                    <Avatar sx={{
                      mr: 1.5,
                      bgcolor: aauColors.primary,
                      width: 32,
                      height: 32
                    }}>
                      <SmartToyIcon sx={{ fontSize: '1rem' }} />
                    </Avatar>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{
                      background: message.role === 'user' 
                        ? aauColors.primary 
                        : 'white',
                      color: message.role === 'user' 
                        ? 'white' 
                        : aauColors.text,
                      padding: '0.75rem 1rem',
                      borderRadius: message.role === 'user'
                        ? '18px 18px 4px 18px'
                        : '18px 18px 18px 4px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      maxWidth: '100%',
                      wordBreak: 'break-word'
                    }}
                  >
                    <Typography sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.5
                    }}>
                      {displayMessageContent(message, index)}
                    </Typography>
                  </motion.div>
                  {message.role === 'user' && (
                    <Avatar sx={{
                      ml: 1.5,
                      bgcolor: aauColors.secondary,
                      width: 32,
                      height: 32
                    }}>
                      <PersonIcon sx={{ fontSize: '1rem' }} />
                    </Avatar>
                  )}
                </Box>
              </motion.div>
            ))
          )}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                mb: '1rem'
              }}
            >
              <Avatar sx={{
                mr: 1.5,
                bgcolor: aauColors.primary,
                width: 32,
                height: 32
              }}>
                <SmartToyIcon sx={{ fontSize: '1rem' }} />
              </Avatar>
              <Box sx={{
                background: 'white',
                padding: '0.75rem 1.25rem',
                borderRadius: '18px 18px 18px 4px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Box sx={{
                  display: 'flex',
                  gap: '0.25rem'
                }}>
                  {[1, 2, 3].map((dot) => (
                    <motion.div
                      key={dot}
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.2
                      }}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: aauColors.primary
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                mb: '1rem'
              }}
            >
              <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
                maxWidth: '90%'
              }}>
                <Avatar sx={{
                  mr: 1.5,
                  bgcolor: aauColors.primary,
                  width: 32,
                  height: 32
                }}>
                  <SmartToyIcon sx={{ fontSize: '1rem' }} />
                </Avatar>
                <motion.div
                  style={{
                    background: 'white',
                    color: aauColors.text,
                    padding: '0.75rem 1rem',
                    borderRadius: '18px 18px 18px 4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                    border: `1px solid #ff6b6b`
                  }}
                >
                  <Typography sx={{
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    color: '#ff6b6b'
                  }}>
                    {error}
                  </Typography>
                </motion.div>
              </Box>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </Box>

      {/* Input Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          padding: '1rem',
          background: 'white',
          borderTop: `1px solid rgba(0,0,0,0.05)`,
          boxShadow: '0 -4px 12px rgba(0,0,0,0.03)'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0,0,0,0.03)',
            borderRadius: '24px',
            p: '0.25rem',
            border: `1px solid rgba(0,0,0,0.05)`
          }}>
            <TextField
              fullWidth
              variant="standard"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about AAU..."
              sx={{
                ml: 1.5,
                '& .MuiInputBase-root': {
                  '&:before, &:after': {
                    display: 'none'
                  }
                },
                '& .MuiInputBase-input': {
                  fontSize: '0.95rem',
                  py: '0.75rem'
                }
              }}
            />
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                sx={{
                  background: input.trim() ? `linear-gradient(90deg, ${aauColors.primary}, ${aauColors.secondary})` : 'rgba(0,0,0,0.1)',
                  color: 'white',
                  width: '48px',
                  height: '48px',
                  mr: 0.5,
                  borderRadius: '50%',
                  minWidth: 'unset'
                }}
              >
                <SendIcon />
              </Button>
            </motion.div>
          </Box>
        </form>
      </motion.div>
    </Box>
  );
};

export default Chatbot;