import api from './axios';

const unwrap = ({ data }) => data.data;

export const getProjects = () => api.get('/projects').then(unwrap);
export const getProjectBySlug = slug => api.get(`/projects/${slug}`).then(unwrap);
export const getSkills = () => api.get('/skills').then(unwrap);
export const getExperience = () => api.get('/experience').then(unwrap);
export const getEducation = () => api.get('/education').then(unwrap);
export const getServices = () => api.get('/services').then(unwrap);
export const submitContact = contact => api.post('/contact', contact).then(unwrap);
