import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Tile from './Tile';

export default function Grid({ size, numMines, onClearTile, onMineHit, score }) {
    const [mines, setMines] = useState([]);
    const [revealedTiles, setRevealedTiles] = useState([]);
    const [maxWidth, setMaxWidth] = useState(Dimensions.get('window').width * 0.9);

    // Initialize mines and revealedTiles state
    useEffect(() => {
        if (size && numMines) {
            const newMines = [];
            while (newMines.length < numMines) {
                const randomIndex = Math.floor(Math.random() * size * size);
                if (!newMines.includes(randomIndex)) {
                    newMines.push(randomIndex);
                }
            }
            setMines(newMines);
            setRevealedTiles(newMines);
        }
    }, [size, numMines]);

    // Function to check if a tile contains a mine
    const isMineTile = (index) => {
        return mines.includes(index);
    };

    // Function to reveal a tile
    const revealTile = (index) => {
        if (isMineTile(index)) {
            onMineHit(); // Call the onMineHit callback to handle the mine hit logic in the Game component
        } else {
            setRevealedTiles([...revealedTiles, index]);
            onClearTile(); // Call the onClearTile callback to increase the score
        }
    };

    // Render grid and tiles
    const renderGrid = () => {
        const tileSize = maxWidth / size;

        const tiles = [];
        for (let i = 0; i < size * size; i++) {
            tiles.push(
                <Tile
                    key={i}
                    size={tileSize}
                    isMine={isMineTile(i)}
                    revealed={revealedTiles.includes(i)}
                    onPress={() => revealTile(i)}
                    onMineHit={onMineHit} // Pass onMineHit callback to Tile component
                    score={score} // Pass score to Tile component
                />
            );
        }
        return tiles;
    };

    return (
        <View style={[styles.container, { width: maxWidth }]}>
            {renderGrid()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
