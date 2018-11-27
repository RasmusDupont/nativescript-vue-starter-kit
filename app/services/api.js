import axios from 'axios'

export function getCleanInstance () {
  return axios.create({
    timeout: 10000
  })
}

export function getApiInstance () {
  return axios.create({
    baseURL: `${baseURL()}/api`,
    timeout: 10000,
    headers: { 'Authorization': JSON.parse(window.localStorage.getItem('id_token')) }
  })
}

export function getApiAdminInstance () {
  return axios.create({
    baseURL: `${baseURL()}/api/admin`,
    timeout: 10000,
    headers: { 'Authorization': JSON.parse(window.localStorage.getItem('id_token')) }
  })
}

function baseURL () {
  try {
    return process.env.ORIGIN || 'http://localhost:3000'
  } catch (err) {
    return 'http://localhost:3000'
  }
}

export function handleResponse (response) {
  console.log(response)
  if (response.error || response.status >= 400 || response.data.status === 'ERROR') {
    return Promise.reject(response)
  } else {
    return Promise.resolve(response.data.payload)
  }
}