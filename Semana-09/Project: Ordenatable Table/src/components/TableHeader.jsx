
const TableHeader = ({ onColumnClick }) => {
  return (
    <thead>
        <tr>
            <th onClick={() => onColumnClick('nome')}>Name</th>
            <th onClick={() => onColumnClick('idade')}>Age</th>
            <th onClick={() => onColumnClick('cargo')}>Role</th>
        </tr>
    </thead>
  )
}

export default TableHeader
