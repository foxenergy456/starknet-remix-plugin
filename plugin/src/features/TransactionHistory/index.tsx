import React from 'react'
import Container from '../../components/ui_components/Container'
import TransactionCard from './TransactionCard'
import { type IExplorerSelector } from '../../utils/misc'
import { useAtomValue } from 'jotai'
import transactionsAtom from '../../atoms/transactions'

const TransactionHistory: React.FC<IExplorerSelector> = (props) => {
  const transactions = useAtomValue(transactionsAtom)
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {transactions.length === 0
          ? (
          <div>No transactions yet</div>
            )
          : (
              transactions.map((transaction, index) => {
                return <TransactionCard key={transaction.txId} transaction={transaction} explorer={props.controlHook.explorer} />
              })
            )}
      </div>
    </Container>
  )
}

export default TransactionHistory
