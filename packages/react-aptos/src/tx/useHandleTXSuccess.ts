import { useApplyUserTransactionToCache } from "@aptosis/seacliff";
import type { UserTransaction } from "@movingco/aptos-api";
import { useCallback } from "react";

export const useHandleTXSuccess = (): ((data: UserTransaction) => void) => {
  const applyUserTransactionToCache = useApplyUserTransactionToCache();
  return useCallback(
    (data: UserTransaction) => {
      // the data is in the response, so updates should be relatively
      // easier to display
      applyUserTransactionToCache(data);
    },
    [applyUserTransactionToCache]
  );
};
