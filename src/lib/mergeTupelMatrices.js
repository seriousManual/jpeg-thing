import Matrix from './Matrix'

export function mergeTupelMatrices(...matrices) {
    return matrices[0].map((x, y) => matrices.map(matrix => matrix.get(x, y)))
}