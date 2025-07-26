import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    AccessibilityProps  
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type ToasterProps = {
    message: string;
    type: 'success' | 'error';
    onClose?: () => void;
    accessibleLabel?: string;
};

const Toaster: React.FC<ToasterProps> = ({ message, type, onClose, accessibleLabel }) => {
    if (!message) return null;

    return (
        <View
            style={[
                styles.base,
                type === 'success' ? styles.success : styles.error,
            ]}
            accessible
            accessibilityLiveRegion="polite"
            accessibilityLabel={accessibleLabel || message}
        >
            <MaterialCommunityIcons
                name={type === 'success' ? 'check-circle' : 'alert-circle'}
                size={20}
                color="#fff"
            />
            <Text style={styles.text}>{message}</Text>
            {onClose && (
                <TouchableOpacity onPress={onClose} style={styles.closeBtn} accessibilityLabel="Close">
                    <Text style={styles.closeText}>&times;</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        // position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        margin: 24,
        minWidth: 150,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        color: '#fff',
        fontWeight: '500',
        zIndex: 9999,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
        gap: 12,
    },
    success: {
        backgroundColor: '#22c55e',
    },
    error: {
        backgroundColor: '#ef4444',
    },
    text: {
        color: '#fff',
        fontWeight: '500',
        flex: 1,
    },
    closeBtn: {
        marginLeft: 'auto',
        padding: 4,
    },
    closeText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Toaster;