/* Minimal linear algebra for the efficient-frontier math. */

/** Invert a square matrix via Gauss-Jordan elimination with partial pivoting. */
export function invert(m: number[][]): number[][] {
  const n = m.length;
  const a = m.map((row, i) => [
    ...row,
    ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)),
  ]);

  for (let col = 0; col < n; col++) {
    let pivot = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(a[r][col]) > Math.abs(a[pivot][col])) pivot = r;
    }
    [a[col], a[pivot]] = [a[pivot], a[col]];

    const d = a[col][col];
    if (Math.abs(d) < 1e-12) throw new Error("Matrix is singular");
    for (let j = 0; j < 2 * n; j++) a[col][j] /= d;

    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = a[r][col];
      for (let j = 0; j < 2 * n; j++) a[r][j] -= f * a[col][j];
    }
  }

  return a.map((row) => row.slice(n));
}

/** Matrix times vector. */
export function matVec(m: number[][], v: number[]): number[] {
  return m.map((row) => row.reduce((s, x, j) => s + x * v[j], 0));
}

/** Dot product. */
export function dot(a: number[], b: number[]): number {
  return a.reduce((s, x, i) => s + x * b[i], 0);
}
