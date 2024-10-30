const API_URL = 'https://portfolio-api-1-35zr.onrender.com/info'

export async function createInfo(data) {
  try {
    // console.log('Enviando datos:', data)
    const response = await fetch(`${API_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      // console.error('Error en la respuesta de la API:', response.statusText)
      throw new Error('Failed to send data to the API')
    }

    // console.log('Datos enviados con éxito')
    return await response.json() // Retorna el JSON en caso de éxito
  } catch (error) {
    // console.error('Error en createInfo:', error)
    throw error
  }
}
