'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { AppStore, breifitStore } from '@/lib/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = breifitStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}