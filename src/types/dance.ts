export interface OrchestraMember {
  role: string
  name: string
}

export interface Dance {
  id: string
  name: string
  image: string
  description: string
  duration: string
  artist: string
  composer?: string
  raga?: string
  tala?: string
  orchestra: OrchestraMember[]
}
