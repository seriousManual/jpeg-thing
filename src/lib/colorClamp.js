export default function colorClamp (value) {
    return Math.min(255, Math.max(0, value))
}