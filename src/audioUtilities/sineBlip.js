export const playSineBlip = () => {
  const audioContext = new AudioContext()
  const oscillator = audioContext.createOscillator()
  oscillator.frequency.setValueAtTime(150, 0)
  oscillator.connect(audioContext.destination)

  oscillator.start(0)
  oscillator.stop(0.01)
}
